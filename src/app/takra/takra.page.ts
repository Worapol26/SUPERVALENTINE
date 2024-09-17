import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

// สร้าง interface สำหรับสินค้าในตะกร้า
interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imageURL: string;
}

@Component({
  selector: 'app-takra',
  templateUrl: './takra.page.html',
  styleUrls: ['./takra.page.scss'],
})
export class TakraPage {
  // ระบุชนิดข้อมูลของ cartItems เป็น CartItem[]
  cartItems: CartItem[] = [
    { name: 'มาม่าต้มยำกุ้ง', price: 8, quantity: 1, imageURL: 'assets/MAMAKUNGs.png' },
    { name: 'น้ำเป๊ปซี่', price: 13, quantity: 2, imageURL: 'assets/pepsi01.png' }
  ];
  

  // คำนวณยอดรวม
  get totalPrice() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  constructor(private navCtrl: NavController) {}

  // กำหนดชนิดของ parameter product เป็น CartItem
  removeFromCart(product: CartItem) {
    this.cartItems = this.cartItems.filter(item => item !== product);
  }

  // นำทางไปยังหน้าสรุปการสั่งซื้อ
  goToCheckout() {
    if (this.cartItems.length > 0) {
      this.navCtrl.navigateForward('/praped1');
    } else {
      alert('ตะกร้าของคุณว่างเปล่า กรุณาเพิ่มสินค้าในตะกร้า');
    }
  }
}
