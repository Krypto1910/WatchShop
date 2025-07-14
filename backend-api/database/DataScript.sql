--ALTER SEQUENCE "Product_ProductID_seq" RESTART WITH 1;

INSERT INTO "Product" (
    "Name", "Price", "Category", "QuantityAvailable", "Image", "Description"
) VALUES
-- 1
('Citizen Eco-Drive Men''s Watch', 180.00, 'Men''s Watch', 15, 'citizen.jpg',
 'Solar-powered Citizen watch with scratch-resistant sapphire crystal.'),
-- 2
('Casio Sheen Women''s Watch', 130.00, 'Women''s Watch', 20, 'sheen.jpg',
 'Elegant gold-tone stainless steel design, 50m water resistance.'),
-- 3
('Apple Watch Series 9', 399.00, 'Smartwatch', 10, 'applewatch9.jpg',
 'Premium smartwatch with always-on display, health and fitness tracking.'),
-- 4
('Garmin Forerunner 255', 349.00, 'Smartwatch', 12, 'garmin255.jpg',
 'Running-focused GPS watch with up to 14 days battery life.'),
-- 5
('Orient Bambino Men''s Automatic Watch', 185.00, 'Men''s Watch', 18, 'orient.jpg',
 'Classic Japanese design, leather strap, automatic movement.'),
-- 6
('Daniel Wellington Classic Petite', 159.00, 'Women''s Watch', 22, 'dw_classic.jpg',
 'Slim 28mm mesh strap watch, ideal for a feminine wrist.'),
-- 7
('Xiaomi Watch S1 Active', 129.00, 'Smartwatch', 25, 'xiaomi_s1.jpg',
 'Supports GPS, heart rate and SpO2 tracking, 5ATM water resistant.'),
-- 8
('G-Shock GA-2100', 110.00, 'Men''s Watch', 30, 'gshock_ga2100.jpg',
 'Iconic shock-resistant design with durable carbon core guard.');
