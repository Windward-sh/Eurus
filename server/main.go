package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	const dir = "../client/dist"

	info, err := os.Stat(dir)

	if err != nil || !info.IsDir() {

		log.Fatal("missing client build at ", dir)

	}

	port := os.Getenv("PORT")

	if port == "" {

		port = "8080"

	}

	server := &http.Server{

		Addr: ":" + port,
		Handler: http.FileServer(http.Dir(dir)),

	}

	log.Print("http://localhost:" + port)

	log.Fatal(server.ListenAndServe())

}
