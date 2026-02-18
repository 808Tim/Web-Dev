import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
            description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
            price: 774648,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
        
        {
            id: 2,
            name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/256 ГБ серый',
            description: 'Samsung Galaxy A56 5G — мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником в повседневных задачах и развлечениях.',
            price: 209100,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
        
        {
            id: 3,
            name: 'Ноутбук ELERON SmartBook 15.6" / 8 Гб / M.2 256 Гб / Win 11 / S.PF01R.03T',
            description: 'ELERON SmartBook 15.6" — надёжный и производительный ноутбук для учёбы, работы и повседневных задач.',
            price: 219991,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p2e/77613207.jpg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/eleron-smartbook-15-6-8-gb-m-2-256-gb-win-11-s-pf01r-03t-148407823/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
        
        {
            id: 4,
            name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
            description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
            price: 521957,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
        
        {
            id: 5,
            name: 'Клавиатура AULA F75 Side-Printed черный',
            description: 'Aula F75 Оптимизированная компактная компоновка на 75%. Компактная компоновка F75 позволяет повысить эффективность использования пространства.',
            price: 20778,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/pf3/24802009.jpg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/aula-f75-side-printed-chernyi-120134580/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },

        {
            id: 6,
            name: 'Клавиатура Logitech G915 920-008909 черный',
            description: 'Представляем игровую клавиатуру Logitech G915 — идеальный выбор для настоящих геймеров, стремящихся к высокой производительности и комфорту в каждой игре.',
            price: 137980,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h8c/82242663448606.jpg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/logitech-g915-920-008909-chernyi-112097360/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
        
        {
            id: 7,
            name: 'Наушники Apple USB-C MYQY3ZM/A белый',
            description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука.',
            price: 10500,
            rating: 5.0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
                
        {
            id: 8,
            name: 'Наушники Apple AirPods 4 белый',
            description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
            price: 57975,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
                
        {
            id: 9,
            name: 'Телевизор NeLus 24QN900 61 см черный',
            description: 'Телевизор NeLus 24QN900 — компактное решение для вашего дома, предлагающее высокое качество изображения и широкие возможности подключения.',
            price: 55000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p82/p3f/48287115.jpeg?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/nelus-24qn900-61-sm-chernyi-141250386/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
                
        {
            id: 10,
            name: 'Телевизор Xiaomi A 2025 L43MA-AURU 109 см черный',
            description: 'Благодаря нашему дисплею с разрешением 3840 x 2160 пикселей, на котором важна каждая деталь, вы сможете насладиться необычайной четкостью изображения. Насладитесь красотой, заключенной в мельчайших деталях.',
            price: 212464,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/pb9/34107271.png?format=gallery-medium',
            images: [
                
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l43ma-auru-109-sm-chernyi-120935278/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1KPRdOIEbSQlq2LQodS3hKVGH1KNdJcRgtlc1y3JuCTbzYN4eyDJVRoCuFIQAvD_BwE',
        },
    ];

    stars(rating: number): number[] {
        const full = Math.floor(rating);
        return Array(full).fill(1);
    }

    kaspi(link: string) {
        window.open(link, '_blank');
    }

    shareWhatsApp(product: Product) {
        const url = `https://wa.me/?text=${encodeURIComponent(`Посмотри этот товар: ${product.link}`)}`;
        window.open(url, '_blank');
    }
}