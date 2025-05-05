package org.example.api

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class ReportController: ReportApi {

    override fun getReports(): ResponseEntity<String> {
        return ResponseEntity.ok("Access granted to protected reports. TODO add really reports")
    }
}