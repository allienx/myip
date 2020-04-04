package v1

import (
	"encoding/json"
	"net/http"
	"time"
)

type ResponseBody struct {
	IP        string `json:"ip"`
	UserAgent string `json:"user_agent"`
	Origin    string `json:"origin"`
	TimeMs    int64  `json:"time_ms"`
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
		TimeMs:    time.Now().UnixNano() / 1000000,
	}

	writeResponse(w, http.StatusOK, body)
}
