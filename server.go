package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	fmt.Println("Server is running on port 8080")
	http.HandleFunc("/", Hello)
	http.HandleFunc("/healthz", Healthz)
	http.HandleFunc("/ap1/v1/doctor", Doctor)
	http.ListenAndServe(":8080", nil)

}

var startedAt = time.Now()

func Doctor(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Doctor"))
}

func Hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Hello, DOg</h1>"))
}

// NOTE: Versão para o HPA
func Healthz(w http.ResponseWriter, r *http.Request) {
	duration := time.Since(startedAt)
	if duration.Seconds() < 10 {
		w.WriteHeader(500)
		w.Write([]byte(fmt.Sprintf("Duration: %v", duration.Seconds())))
	} else {
		w.WriteHeader(200)
		w.Write([]byte("ok"))
	}
}

// func Healthz(w http.ResponseWriter, r *http.Request) {
// 	duration := time.Since(startedAt)

// 	if duration.Seconds() < 10 || duration.Seconds() > 30 {
// 		w.WriteHeader(500)
// 		w.Write([]byte(fmt.Sprintf("Duration: %v", duration.Seconds())))
// 	} else {
// 		w.WriteHeader(200)
// 		w.Write([]byte("ok"))
// 	}
// }
