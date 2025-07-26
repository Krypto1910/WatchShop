-- TẠO BẢNG Customer
CREATE TABLE "Customer" (
    "CustomerID"    INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "Name"          VARCHAR(30)  NOT NULL,
    "Email"         VARCHAR(60)  NOT NULL UNIQUE,
    "Password"      VARCHAR(100)  NOT NULL,
    "Phone"         VARCHAR(11),
    "Address"       VARCHAR(255)
);

-- TẠO BẢNG Product
CREATE TABLE "Product" (
    "ProductID"         INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "Name"              VARCHAR(40)  NOT NULL,
    "Price"             NUMERIC(10,2) NOT NULL,
    "Category"          VARCHAR(50),
    "QuantityAvailable" INT          NOT NULL,
    "Image"             VARCHAR(50),
    "Description"       TEXT
);

-- TẠO BẢNG ShipInfo
CREATE TABLE "ShipInfo" (
    "ShipInfoID"      INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "CustomerID"      INT NOT NULL,
    "ContactName"     VARCHAR(30) NOT NULL,
    "ContactNumber"   VARCHAR(11),
    "ShippingAddress" VARCHAR(255) NOT NULL,
    CONSTRAINT fk_shipinfo_customer
        FOREIGN KEY ("CustomerID")
        REFERENCES "Customer"("CustomerID")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);
-- TẠO BẢNG Cart
CREATE TABLE "Cart" (
    "CartID"      INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "CustomerID"  INT  NOT NULL,
    CONSTRAINT fk_cart_customer
        FOREIGN KEY ("CustomerID")
        REFERENCES "Customer" ("CustomerID")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- TẠO BẢNG Order
CREATE TABLE "Order" (
    "OrderID"     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "CustomerID"  INT  NOT NULL,
    "Date"        DATE NOT NULL,
    "TotalAmount" NUMERIC(10,2) NOT NULL,
    "Status"      VARCHAR(50)   NOT NULL,
    "Address"     VARCHAR(255),
    "PaymentMethod" VARCHAR(20),
    CONSTRAINT fk_order_customer
        FOREIGN KEY ("CustomerID")
        REFERENCES "Customer" ("CustomerID")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- TẠO BẢNG OrderItem
CREATE TABLE "OrderItem" (
    "OrderItemID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "OrderID"     INT NOT NULL,
    "ProductID"   INT NOT NULL,
    "Quantity"    INT NOT NULL CHECK ("Quantity" > 0),
    "UnitPrice"   NUMERIC(10,2) NOT NULL,
    CONSTRAINT fk_orderitem_order
        FOREIGN KEY ("OrderID")
        REFERENCES "Order" ("OrderID")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_orderitem_product
        FOREIGN KEY ("ProductID")
        REFERENCES "Product" ("ProductID")
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT uq_order_product UNIQUE ("OrderID", "ProductID")
);

-- TẠO INDEX (tuỳ chọn)
CREATE INDEX idx_product_category     ON "Product"("Category");
CREATE INDEX idx_order_customerid     ON "Order"("CustomerID");
CREATE INDEX idx_order_date           ON "Order"("Date");


