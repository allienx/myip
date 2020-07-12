package v1

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
)

type ResponseError struct {
	Message string `json:"message"`
}

type IpApiResponseBody struct {
	Error     interface{} `json:"error"`
	Data      interface{} `json:"data"`
}

func writeJsonResponse(w http.ResponseWriter, statusCode int, body interface{}) {
	b, _ := json.Marshal(body)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	_, _ = w.Write(b)
}

func writeErrorResponse(w http.ResponseWriter, statusCode int, msg string) {
	body := IpApiResponseBody{
		Error: ResponseError{
			Message: msg,
		},
	}

	writeJsonResponse(w, statusCode, body)
}

func IpApiHandler(w http.ResponseWriter, r *http.Request) {
	m, _ := url.ParseQuery(r.URL.RawQuery)
	ip := m.Get("ip")

	if ip == "" {
		msg := "Missing required query parameter ip."

		writeErrorResponse(w, http.StatusBadRequest, msg)
		return
	}

	apiUrl := fmt.Sprintf("http://ip-api.com/json/%s?fields=33292287", ip)
	resp, err := http.Get(apiUrl)

	if err != nil {
		urlErr := err.(*url.Error)

		statusCode := http.StatusBadGateway
		if urlErr.Timeout() {
			statusCode = http.StatusGatewayTimeout
		}

		msg := err.Error()

		writeErrorResponse(w, statusCode, msg)
		return
	}

	defer resp.Body.Close()

	var data interface{}
	if err = json.NewDecoder(resp.Body).Decode(&data); err != nil {
		msg := fmt.Sprintf("Unexpected JSON response: %s", err.Error())

		writeErrorResponse(w, http.StatusBadGateway, msg)
		return
	}

	body := IpApiResponseBody{
		Data: data,
	}

	writeJsonResponse(w, resp.StatusCode, body)
}
