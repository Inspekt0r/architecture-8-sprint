package org.example.api

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping

interface ReportApi {
    @Operation(
        summary = "Получить отчёты",
        description = "Только для пользователей с ролью 'prothetic_user'",
        security = [SecurityRequirement(name = "bearerAuth")]
    )
    @CrossOrigin(origins = ["http://localhost:3000", "http://frontend:3000"], maxAge = 3600)
    @GetMapping("/reports")
    fun getReports(): ResponseEntity<String>
}