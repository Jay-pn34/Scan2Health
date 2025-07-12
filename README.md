# Scan2Health

This is a PHP-based web application that helps users track food products based on their personal health conditions and dietary restrictions. It uses barcode scanning and integrates data from a public food database to analyze nutritional information and provide health warnings tailored to each user.

## Features

- **User Registration & Login**  
  Users can create an account, log in securely, and manage their profile.

- **Profile Customization**  
  Users can set their weight, height, dietary restrictions (sugar, salt, fat), and health conditions (diabetes, cholesterol, hypertension).

- **Product Scanning & Search**  
  Users can input or scan a product's barcode to fetch and display its nutritional data and ingredients.

- **Health-Based Warnings**  
  The system evaluates ingredients and nutrients against the user's profile and displays warnings if any content (like sugar or salt) exceeds safe thresholds.

- **Ingredient & Nutrient Details**  
  All ingredients and nutrients are shown in a clear table with an option to search them online for additional information.

- **Account Management**  
  Users can update their profile or delete their account permanently.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: PHP  
- **Database**: MySQL  
- **API Integration**: Product data is fetched using the barcode from an external food product database.  
- **QR/Barcode Scanning**: Handled via JavaScript libraries for real-time barcode decoding.

## Folder Structure

- `css/` - Contains global styles for layout and form components  
- `includes/` - Contains reusable PHP files (like database connection, helper functions)  
- `auth/` - Handles login, register, and logout functionalities  
- `product.php` - Core page that shows product details and personalized warnings  
- `profile.php` - User profile page for updates and settings  
- `dashboard.php` - Central user dashboard after login

## Usage

1. Register with your personal and health information  
2. Go to the dashboard and enter or scan a product's barcode  
3. View ingredient and nutrition data, with warnings based on your health profile  
4. Update your profile any time to change dietary preferences  
5. Delete your account if you no longer want to use the service

## Notes

- Passwords are securely hashed using bcrypt  
- Input validations are handled on both frontend and backend  
- Nutrition values are evaluated per 100g of the product  
- Dietary filters and health checks are extensible for future additions
