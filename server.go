package main

import (
	"log"
	"net/http"

	v1 "github.com/allienx/myip/api/v1"
)

func main() {
	http.HandleFunc("/api/v1/info", v1.InfoHandler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
