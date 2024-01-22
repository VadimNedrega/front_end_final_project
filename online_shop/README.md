# Internet Shop

## The list of table

### Products Table
- product_id (PK)
- description
- price
- category_id (FK linking to a **category** table)
- image_url

### Categories Table
- category_id (PK)
- name

### Customers Table (Users ???)
- customer_id (PK)
- first_name
- last_name
- email
- password (hashed)
- address
- phone_number

### Orders Table

- order_id (PK)
- customer_id (FK linking to the **customers** table)
- order_date
- order_detail_id (FK linking to the **order details** table)
- delivery_status ("pending" "delivered")
- payment_status ("paid", "not paid")

### Order Details Table (for storing individual products within an order)

- order_detail_id (PK)
- order_id (FK linking to the **orders** table)
- product_id (FK linking to the **products** table)
- quantity
- price
- amount (calculated)

### Carts Table (for storing items in a user's shopping cart before purchase)

- cart_id (PK)
- customer_id (FK linking to the **customers** table)
- cart_item_id (FK linking to the **cart items** table)

### Cart Items Table

- cart_item_id (PK)
- cart_id (FK linking to the **cart** table)
- order_id (FK linking to the **orders** table)
- product_id (FK linking to the **products** table)
- quantity
- price
- amount (calculated)

### Payments Table

- payment_id
- order_id (FK linking to the **orders** table)
- transaction_date
- amount
- payment_method VARCHAR(50),
- transaction_status (???)



## Исходные положения

- Товары на складе находятся в неограниченном количестве.
- Платежи выполняются всегда удачно после заполнения платежной формы. Несоответствие (ошибка может
  быть только в сумме).
- Платеж может быть выполнен только одним полным платежем.
- Все товары получаются в офисе (без доставки).
- .............................................................