package v1

import (
	"encoding/json"
	"net/http"
)

type InfoResponseBody struct {
	IP        string `json:"ip"`
	UserAgent string `json:"user_agent"`
	Origin    string `json:"origin"`
}

func InfoHandler(w http.ResponseWriter, r *http.Request) {
	ip := r.RemoteAddr
	ua := r.UserAgent()
	origin := r.Header.Get("Origin")

	body := InfoResponseBody{
		IP:        ip,
		UserAgent: ua,
		Origin:    origin,
	}

	b, _ := json.Marshal(body)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(b)
}
