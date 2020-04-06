package v1

import (
	"encoding/json"
	"net/http"
)

type ResponseBody struct {
	IP        string `json:"ip"`
	UserAgent string `json:"user_agent"`
	Origin    string `json:"origin"`
}

func writeResponse(w http.ResponseWriter, statusCode int, body interface{}) {
	b, _ := json.Marshal(body)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	_, _ = w.Write(b)
}

func InfoHandler(w http.ResponseWriter, r *http.Request) {
	ip := r.RemoteAddr
	ua := r.UserAgent()
	origin := r.Header.Get("Origin")

	body := ResponseBody{
		IP:        ip,
		UserAgent: ua,
		Origin:    origin,
	}

	writeResponse(w, http.StatusOK, body)
}
