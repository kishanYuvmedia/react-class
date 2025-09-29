https://docs.google.com/document/d/1QgsAZI3PFzabJIvF68pShYwoxMiQKzjG6l2pBfYrzBg/edit?usp=sharing
# 📑 Database Table Structure
---
## 1. **Users**

| Field         | Type                                              | Notes                          |
| ------------- | ------------------------------------------------- | ------------------------------ |
| id            | UUID (PK)                                         | Unique user id                 |
| name          | VARCHAR(150)                                      | User full name                 |
| email         | VARCHAR(150) UNIQUE                               | Login email                    |
| password_hash | TEXT                                              | Hashed password                |
| phone         | VARCHAR(20)                                       | Optional                       |
| role          | ENUM(customer, vendor_staff, vendor_owner, admin) | Defines permissions            |
| is_active     | BOOLEAN DEFAULT true                              | Account status                 |
| metadata      | JSONB                                             | Extra info (address, settings) |
| created_at    | TIMESTAMP                                         | Auto                           |
| updated_at    | TIMESTAMP                                         | Auto                           |

---

## 2. **Vendors / Shops**

| Field       | Type                             | Notes                       |
| ----------- | -------------------------------- | --------------------------- |
| id          | UUID (PK)                        | Unique vendor id            |
| owner_id    | UUID (FK → users.id)             | Vendor owner                |
| name        | VARCHAR(200)                     | Shop name                   |
| slug        | VARCHAR(150) UNIQUE              | URL slug                    |
| description | TEXT                             | Shop description            |
| status      | ENUM(pending, active, suspended) | Vendor state                |
| address     | JSONB                            | Shop address                |
| settings    | JSONB                            | Shipping, payment, branding |
| created_at  | TIMESTAMP                        | Auto                        |
| updated_at  | TIMESTAMP                        | Auto                        |

---

## 3. **Categories**

| Field     | Type                      | Notes                       |
| --------- | ------------------------- | --------------------------- |
| id        | UUID (PK)                 | Unique category id          |
| name      | VARCHAR(150)              | Category name               |
| slug      | VARCHAR(150) UNIQUE       | SEO URL                     |
| parent_id | UUID (FK → categories.id) | For hierarchy               |
| metadata  | JSONB                     | Extra data (icons, filters) |

---

## 4. **Attributes (Filters)**

| Field  | Type         | Notes                        |
| ------ | ------------ | ---------------------------- |
| id     | UUID (PK)    | Unique id                    |
| name   | VARCHAR(100) | Attribute name (Color, Size) |
| values | JSONB        | List of possible values      |

---

## 5. **Products**

| Field             | Type                             | Notes             |
| ----------------- | -------------------------------- | ----------------- |
| id                | UUID (PK)                        | Unique product id |
| vendor_id         | UUID (FK → vendors.id)           | Vendor owner      |
| title             | VARCHAR(200)                     | Product title     |
| slug              | VARCHAR(200)                     | SEO slug          |
| short_description | TEXT                             | Small description |
| long_description  | TEXT                             | Full description  |
| category_id       | UUID (FK → categories.id)        | Category          |
| status            | ENUM(draft, published, archived) | Product state     |
| is_featured       | BOOLEAN DEFAULT false            | Highlight product |
| created_at        | TIMESTAMP                        | Auto              |
| updated_at        | TIMESTAMP                        | Auto              |

---

## 6. **SKUs (Product Variants & Inventory)**

| Field        | Type                    | Notes                           |
| ------------ | ----------------------- | ------------------------------- |
| id           | UUID (PK)               | Unique SKU id                   |
| product_id   | UUID (FK → products.id) | Parent product                  |
| sku_code     | VARCHAR(100) UNIQUE     | SKU identifier                  |
| price        | DECIMAL(12,2)           | Selling price                   |
| sale_price   | DECIMAL(12,2)           | Discounted price                |
| stock        | INT                     | Inventory qty                   |
| weight_grams | INT                     | Optional                        |
| attributes   | JSONB                   | e.g. {"size":"M","color":"Red"} |
| is_active    | BOOLEAN DEFAULT true    | Status                          |
| created_at   | TIMESTAMP               | Auto                            |
| updated_at   | TIMESTAMP               | Auto                            |

---

## 7. **Product Media**

| Field      | Type                     | Notes                 |
| ---------- | ------------------------ | --------------------- |
| id         | UUID (PK)                | Unique id             |
| product_id | UUID (FK → products.id)  | Product               |
| sku_id     | UUID (FK → skus.id) NULL | Optional SKU specific |
| url        | TEXT                     | Media URL             |
| media_type | ENUM(image, video)       | File type             |
| sort_order | INT                      | Display order         |

---

## 8. **Carts**

| Field      | Type                 | Notes          |
| ---------- | -------------------- | -------------- |
| id         | UUID (PK)            | Unique cart id |
| user_id    | UUID (FK → users.id) | Cart owner     |
| metadata   | JSONB                | Extra info     |
| created_at | TIMESTAMP            | Auto           |
| updated_at | TIMESTAMP            | Auto           |

### **Cart Items**

| Field      | Type                 | Notes          |
| ---------- | -------------------- | -------------- |
| id         | UUID (PK)            | Unique id      |
| cart_id    | UUID (FK → carts.id) | Parent cart    |
| sku_id     | UUID (FK → skus.id)  | Product SKU    |
| quantity   | INT                  | Quantity       |
| unit_price | DECIMAL(12,2)        | Snapshot price |
| added_at   | TIMESTAMP            | Auto           |

---

## 9. **Orders**

| Field            | Type                                                         | Notes                     |
| ---------------- | ------------------------------------------------------------ | ------------------------- |
| id               | UUID (PK)                                                    | Order id                  |
| user_id          | UUID (FK → users.id)                                         | Buyer                     |
| vendor_id        | UUID (FK → vendors.id)                                       | Vendor (for split orders) |
| order_number     | VARCHAR(50) UNIQUE                                           | Human-readable            |
| status           | ENUM(pending, paid, shipped, delivered, cancelled, refunded) | Order status              |
| total_amount     | DECIMAL(14,2)                                                | Total                     |
| shipping_address | JSONB                                                        | Address                   |
| billing_address  | JSONB                                                        | Address                   |
| payment_status   | ENUM(unpaid, paid, failed, refunded)                         | Payment state             |
| placed_at        | TIMESTAMP                                                    | Order time                |
| metadata         | JSONB                                                        | Extra                     |

### **Order Items**

| Field            | Type                  | Notes                     |
| ---------------- | --------------------- | ------------------------- |
| id               | UUID (PK)             | Unique id                 |
| order_id         | UUID (FK → orders.id) | Parent order              |
| sku_id           | UUID (FK → skus.id)   | Ordered SKU               |
| product_snapshot | JSONB                 | Name, price at order time |
| quantity         | INT                   | Qty                       |
| unit_price       | DECIMAL(12,2)         | Price                     |
| subtotal         | DECIMAL(14,2)         | Total line amount         |

---

## 10. **Shipments**

| Field           | Type                                                    | Notes             |
| --------------- | ------------------------------------------------------- | ----------------- |
| id              | UUID (PK)                                               | Shipment id       |
| order_id        | UUID (FK → orders.id)                                   | Related order     |
| carrier         | VARCHAR(100)                                            | Shipping provider |
| tracking_number | VARCHAR(100)                                            | Tracking code     |
| status          | ENUM(pending, shipped, in_transit, delivered, returned) | Shipment state    |
| shipped_at      | TIMESTAMP                                               | Date shipped      |
| delivered_at    | TIMESTAMP                                               | Date delivered    |

---

## 11. **Payments**

| Field              | Type                                         | Notes                  |
| ------------------ | -------------------------------------------- | ---------------------- |
| id                 | UUID (PK)                                    | Payment id             |
| order_id           | UUID (FK → orders.id)                        | Linked order           |
| gateway            | VARCHAR(50)                                  | Stripe, Razorpay, etc. |
| gateway_payment_id | VARCHAR(150)                                 | External id            |
| amount             | DECIMAL(14,2)                                | Amount paid            |
| status             | ENUM(initiated, succeeded, failed, refunded) | Payment state          |
| raw_response       | JSONB                                        | Gateway payload        |
| created_at         | TIMESTAMP                                    | Auto                   |

---

## 12. **Refunds**

| Field      | Type                                         | Notes            |
| ---------- | -------------------------------------------- | ---------------- |
| id         | UUID (PK)                                    | Refund id        |
| payment_id | UUID (FK → payments.id)                      | Payment refunded |
| amount     | DECIMAL(14,2)                                | Refund amount    |
| reason     | TEXT                                         | Refund reason    |
| status     | ENUM(pending, approved, rejected, completed) | Refund state     |
| created_at | TIMESTAMP                                    | Auto             |

---

## 13. **Vendor Payouts / Ledger**

| Field         | Type                            | Notes                  |
| ------------- | ------------------------------- | ---------------------- |
| id            | UUID (PK)                       | Ledger id              |
| vendor_id     | UUID (FK → vendors.id)          | Vendor                 |
| order_id      | UUID (FK → orders.id)           | Related order          |
| type          | ENUM(sale, fee, payout, refund) | Transaction type       |
| amount        | DECIMAL(14,2)                   | Amount                 |
| balance_after | DECIMAL(14,2)                   | Vendor running balance |
| metadata      | JSONB                           | Notes                  |
| created_at    | TIMESTAMP                       | Auto                   |

---

## 14. **Reviews**

| Field      | Type                    | Notes            |
| ---------- | ----------------------- | ---------------- |
| id         | UUID (PK)               | Review id        |
| user_id    | UUID (FK → users.id)    | Reviewer         |
| product_id | UUID (FK → products.id) | Product reviewed |
| rating     | INT (1-5)               | Rating           |
| title      | VARCHAR(200)            | Review title     |
| body       | TEXT                    | Review body      |
| approved   | BOOLEAN DEFAULT false   | Moderation       |
| created_at | TIMESTAMP               | Auto             |

---

## 15. **Q&A**

| Field      | Type                    | Notes                    |
| ---------- | ----------------------- | ------------------------ |
| id         | UUID (PK)               | Q&A id                   |
| product_id | UUID (FK → products.id) | Product                  |
| user_id    | UUID (FK → users.id)    | Question author          |
| question   | TEXT                    | Question                 |
| answer     | TEXT                    | Answer (by vendor/admin) |
| created_at | TIMESTAMP               | Auto                     |

---

## 16. **Coupons / Promotions**

| Field          | Type                    | Notes                           |
| -------------- | ----------------------- | ------------------------------- |
| id             | UUID (PK)               | Coupon id                       |
| code           | VARCHAR(50) UNIQUE      | Coupon code                     |
| description    | TEXT                    | Details                         |
| discount_type  | ENUM(percentage, fixed) | Discount kind                   |
| discount_value | DECIMAL(12,2)           | Amount/percentage               |
| starts_at      | TIMESTAMP               | Valid from                      |
| ends_at        | TIMESTAMP               | Valid until                     |
| usage_limit    | INT                     | Total limit                     |
| per_user_limit | INT                     | Limit per customer              |
| conditions     | JSONB                   | Restrictions (vendor, category) |

---

## 17. **Notifications**

| Field      | Type                          | Notes           |
| ---------- | ----------------------------- | --------------- |
| id         | UUID (PK)                     | Notification id |
| user_id    | UUID (FK → users.id)          | Target user     |
| title      | VARCHAR(150)                  | Title           |
| message    | TEXT                          | Body            |
| type       | ENUM(email, sms, push, inapp) | Delivery        |
| is_read    | BOOLEAN DEFAULT false         | Read status     |
| created_at | TIMESTAMP                     | Auto            |

---

## 18. **Audit Logs**

| Field         | Type                 | Notes                |
| ------------- | -------------------- | -------------------- |
| id            | UUID (PK)            | Log id               |
| actor_id      | UUID (FK → users.id) | Who acted            |
| action        | VARCHAR(100)         | e.g., CREATE_ORDER   |
| resource_type | VARCHAR(50)          | e.g., Product, Order |
| resource_id   | UUID                 | Related record       |
| payload       | JSONB                | Extra details        |
| created_at    | TIMESTAMP            | Auto                 |

---

👉 This structure ensures scalability, vendor separation, and full traceability (audit logs, snapshots, payouts).

---

