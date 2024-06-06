

---

# World Sport

## Introduction
**World Sport** is a robust eCommerce platform designed specifically for sports supplement stores. 
This system provides functionalities for product management, order processing, and customer engagement, ensuring an efficient and user-friendly shopping experience.

![World Sport Screenshot](https://docs.google.com/document/d/1A61xd7DBWnVb36YfVSmO1_CC_mL5_7QSK7nRHa2EvcQ/edit?usp=sharing)

## Installation
Follow these steps to get a local copy running:

```bash
# Clone the repository
git clone https://github.com/RidaOuledhaddou/world_sport.git
cd world_sport

# Backend setup
cd server
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

# Frontend setup
cd ../client
npm install
npm start
```

## Usage
Utilize World Sport to:
- **Manage Products:** Easily add, update, and remove products.
- **Process Orders:** Efficiently handle customer orders from placement through delivery.
- **Engage Customers:** Track customer interactions and history to provide personalized service.

## Related Projects
- [Fitness Tracker App](#)
- [Nutrition Insight Tools](#)

## Licensing
This project is licensed under the MIT License - see the [LICENSE.md](nothing) file for details.

---



