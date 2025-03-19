# Laravel Project

## 📌 Introduction
This is a Laravel-based project designed to project showcase intern. It includes features such as company profile, data research, and another feature with admin dashboard management.

## 🛠 Requirements
Ensure your system meets the following requirements:
- PHP >= 8.1
- Composer
- Laravel >= 10
- MySQL
- Node.js & NPM (for frontend assets)

## 🚀 Installation
Follow these steps to set up the project locally:

1. **Clone the repository**
   ```sh
   git clone https://github.com/MochaiminMR/LUPIC
   cd LUPIC
   ```

2. **Install dependencies**
   ```sh
   composer install
   npm install 
   ```

3. **Copy and configure the environment file**
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
   Edit `.env` and configure database settings accordingly.

4. **Run database migrations and seed data (if applicable)**
   ```sh
   php artisan migrate --seed
   ```

5. **Run the application**
   ```sh
   php artisan serve
   ```
   The application will be available at `http://127.0.0.1:8000`.

6. **Seed Dummy Data for Voyager**
   ```sh
   php artisan db:seed --class=VoyagerDatabaseSeeder
   php artisan db:seed --class=VoyagerDummyDatabaseSeeder
   ```
   This will populate the database with dummy data for testing the Voyager admin panel.

## 🛠 Development & Usage
### Running the project
- To start the local server: `php artisan serve`
  
This project is licensed under the [MIT License](LICENSE).

## 📞 Contact
For any questions, reach out via email: mochaimin.9@gmail.com
