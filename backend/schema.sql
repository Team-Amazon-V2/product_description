CREATE TABLE product_specs (
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_dimensions VARCHAR,
    item_weight VARCHAR,
    manufacturer_name VARCHAR,
    asin_id VARCHAR,
    country VARCHAR,
    model_number VARCHAR,
    batteries VARCHAR,
    date_available VARCHAR,
    box_info text[]
    );

    

