# Strains Group API Reference

The backend API server operates on `http://localhost:5000/api`.

## Endpoints

### 1. Health Check
- **Route**: `GET /api/health`
- **Description**: Returns server status, timestamp, and database connectivity.
- **Response**:
```json
{
  "status": "healthy",
  "timestamp": "2026-10-21T12:00:00.000Z",
  "service": "Strains Group API",
  "database": "connected (PostgreSQL)"
}
```

### 2. Contact Inquiries
- **Route**: `POST /api/contact`
- **Validation Schema (Zod)**:
  - `name`: string (2-100 characters, required)
  - `email`: string (valid email format, required)
  - `phone`: string (optional)
  - `service`: string (default: "Art Direction")
  - `message`: string (5-5000 characters, required)
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Your inquiry has been transmitted to Strains Group successfully",
  "data": {
    "id": 1,
    "name": "Alexander Weber",
    "email": "alexander@example.com",
    "service": "Cinematic Video & Photo Production",
    "message": "Project details...",
    "created_at": "2026-10-21T12:00:00.000Z"
  }
}
```

- **Route**: `GET /api/contact`
- **Description**: Retrieve list of contact submissions.

### 3. Newsletter Subscriptions
- **Route**: `POST /api/newsletter`
- **Validation Schema (Zod)**:
  - `email`: string (valid email format, required)
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Thank you for subscribing to Strains Group updates",
  "data": {
    "email": "subscriber@brand.com",
    "subscribed_at": "2026-10-21T12:00:00.000Z"
  }
}
```

### 4. Dynamic Content Endpoints
- **Route**: `GET /api/projects`
  - Returns the 6 curated portfolio case studies.
- **Route**: `GET /api/services`
  - Returns the 5 core capability disciplines.
- **Route**: `GET /api/testimonials`
  - Returns verified client endorsements and ratings.
- **Route**: `GET /api/products`
  - Returns the 5 3D Torus ring edition variants.
