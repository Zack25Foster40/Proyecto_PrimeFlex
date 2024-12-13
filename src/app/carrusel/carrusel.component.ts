import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  products = [
    {
      name: 'Producto 1',
      price: 50.0,
      image: 'https://http2.mlstatic.com/D_NQ_NP_822379-MLA74427926455_022024-O.webp',
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'Producto 2',
      price: 75.0,
      image: 'https://luegopago.blob.core.windows.net/luegopago-uploads/compressed/ADFGAMERPRO8S-0.webp',
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'Producto 3',
      price: 100.0,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_912888-MCO50925614021_072022-T.webp',
      inventoryStatus: 'OUTOFSTOCK'
    },
    {
      name: 'Producto 4',
      price: 120.0,
      image: 'https://http2.mlstatic.com/D_NQ_NP_999599-MLA46915616154_072021-O.webp',
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'Producto 5',
      price: 150.0,
      image: 'https://i5.walmartimages.com/asr/137aba00-2a39-4b01-974f-a30be1cbbc10.e6cc57f20fc4c0a7182e50d08d4924e4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      inventoryStatus: 'INSTOCK'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; 
    }
  }
}
