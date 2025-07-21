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
    "ShipInfoID"     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ContactName"    VARCHAR(30)  NOT NULL,
    "ContactNumber"  VARCHAR(11),
    "ShippingAddress" VARCHAR(255) NOT NULL
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
    "ShipInfoID"  INT,
    "Date"        DATE NOT NULL,
    "TotalAmount" NUMERIC(10,2) NOT NULL,
    "Status"      VARCHAR(50)   NOT NULL,
    CONSTRAINT fk_order_customer
        FOREIGN KEY ("CustomerID")
        REFERENCES "Customer" ("CustomerID")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_order_shipinfo
        FOREIGN KEY ("ShipInfoID")
        REFERENCES "ShipInfo" ("ShipInfoID")
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

-- TẠO BẢNG CartItem
CREATE TABLE "CartItem" (
    "CartItemID" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ProductID"  INT NOT NULL,
    "CartID"     INT NOT NULL,
    "Quantity"   INT NOT NULL CHECK ("Quantity" > 0),
    CONSTRAINT fk_cartitem_product
        FOREIGN KEY ("ProductID")
        REFERENCES "Product" ("ProductID")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_cartitem_cart
        FOREIGN KEY ("CartID")
        REFERENCES "Cart" ("CartID")
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT uq_cart_product UNIQUE ("CartID", "ProductID")
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
CREATE INDEX idx_cartitem_cartid      ON "CartItem"("CartID");
CREATE INDEX idx_order_customerid     ON "Order"("CustomerID");
CREATE INDEX idx_order_date           ON "Order"("Date");


-- SỬA LẠI DB
-- DROP bảng ShipInfo cũ nếu đã tồn tại
DROP TABLE IF EXISTS "ShipInfo" CASCADE;

-- Tạo lại bảng ShipInfo theo ERD mới
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

-- Xóa bảng Order cũ nếu đã tạo
DROP TABLE IF EXISTS "Order" CASCADE;

-- Tạo lại bảng Order theo thứ tự và tên trường mới
CREATE TABLE "Order" (
    "OrderID"     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "CustomerID"  INT  NOT NULL,
    "Date"        DATE NOT NULL,
    "TotalAmount" NUMERIC(10,2) NOT NULL,
    "Status"      VARCHAR(50)   NOT NULL,
    "Address"     VARCHAR(255),
    CONSTRAINT fk_order_customer
        FOREIGN KEY ("CustomerID")
        REFERENCES "Customer" ("CustomerID")
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- Thêm cột PaymentMethod vào bảng Order
ALTER TABLE "Order"
ADD COLUMN "PaymentMethod" VARCHAR(20);

