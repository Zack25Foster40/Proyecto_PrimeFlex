import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images: { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string }[] = [];
  responsiveOptions: any[] = [];

  constructor() {
    this.images = [
      {
        itemImageSrc: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
        thumbnailImageSrc: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
        alt: 'Imagen 1',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://st2.depositphotos.com/1422604/9652/i/450/depositphotos_96524026-stock-photo-danubian-delta-landscape-at-sunsetsunrise.jpg',
        thumbnailImageSrc: 'https://st2.depositphotos.com/1422604/9652/i/450/depositphotos_96524026-stock-photo-danubian-delta-landscape-at-sunsetsunrise.jpg',
        alt: 'Imagen 2',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://media.istockphoto.com/id/2166773378/es/foto/autumn-on-lake-gosau-in-salzkammergut-austria.webp?a=1&b=1&s=612x612&w=0&k=20&c=I9dwTEuUHl56qpTFC64Vb0vM_cRYSla-7XK_d9IMTJI=',
        thumbnailImageSrc: 'https://media.istockphoto.com/id/2166773378/es/foto/autumn-on-lake-gosau-in-salzkammergut-austria.webp?a=1&b=1&s=612x612&w=0&k=20&c=I9dwTEuUHl56qpTFC64Vb0vM_cRYSla-7XK_d9IMTJI=',
        alt: 'Imagen 3',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://media.istockphoto.com/id/2053229241/es/foto/blooming-lupine-flowers-on-the-stokksnes-headland.webp?a=1&b=1&s=612x612&w=0&k=20&c=glP5-WAVbOqs2HpG4QTyHwgFtPVGlVzktJUOVx_7SuM=',
        thumbnailImageSrc: 'https://media.istockphoto.com/id/2053229241/es/foto/blooming-lupine-flowers-on-the-stokksnes-headland.webp?a=1&b=1&s=612x612&w=0&k=20&c=glP5-WAVbOqs2HpG4QTyHwgFtPVGlVzktJUOVx_7SuM=',
        alt: 'Imagen 4',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://media.istockphoto.com/id/1756133188/es/foto/vista-de-los-pescadores-que-pescan-en-el-r%C3%ADo-en-la-monta%C3%B1a-thung-en-tra-linh-provincia-de-cao.webp?a=1&b=1&s=612x612&w=0&k=20&c=WCyy5x0QAmsrKOS0sNmsKOLworsas9LM-arQpX1pF3A=',
        thumbnailImageSrc: 'https://media.istockphoto.com/id/1756133188/es/foto/vista-de-los-pescadores-que-pescan-en-el-r%C3%ADo-en-la-monta%C3%B1a-thung-en-tra-linh-provincia-de-cao.webp?a=1&b=1&s=612x612&w=0&k=20&c=WCyy5x0QAmsrKOS0sNmsKOLworsas9LM-arQpX1pF3A=',
        alt: 'Imagen 5',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://st5.depositphotos.com/12822122/65356/i/450/depositphotos_653569498-stock-photo-fantastic-viewbeautiful-sunset-sky-twilight.jpg',
        thumbnailImageSrc: 'https://st5.depositphotos.com/12822122/65356/i/450/depositphotos_653569498-stock-photo-fantastic-viewbeautiful-sunset-sky-twilight.jpg',
        alt: 'Imagen 6',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
        thumbnailImageSrc: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
        alt: 'Imagen 7',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://media.istockphoto.com/id/640318118/es/foto/puesta-de-sol-sobre-el-oc%C3%A9ano-%C3%ADndico.jpg?s=612x612&w=0&k=20&c=8v043iXScr7IUZ8WQ3-9OZmnoETksbEFPlnzecHzn_c=',
        thumbnailImageSrc: 'https://media.istockphoto.com/id/640318118/es/foto/puesta-de-sol-sobre-el-oc%C3%A9ano-%C3%ADndico.jpg?s=612x612&w=0&k=20&c=8v043iXScr7IUZ8WQ3-9OZmnoETksbEFPlnzecHzn_c=',
        alt: 'Imagen 8',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://st4.depositphotos.com/20524830/26297/i/450/depositphotos_262971282-stock-photo-photo-showing-landscape.jpg',
        thumbnailImageSrc: 'https://st4.depositphotos.com/20524830/26297/i/450/depositphotos_262971282-stock-photo-photo-showing-landscape.jpg',
        alt: 'Imagen 9',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://media.istockphoto.com/id/498309616/es/foto/gran-mar-carretera-la-v%C3%ADa-l%C3%A1ctea-en-la-noche-vista.jpg?s=612x612&w=0&k=20&c=XUsavsgJptpEqwLSe2VUzhBwTi3vmGzBg9V25TrBH1Q=',
        thumbnailImageSrc: 'https://media.istockphoto.com/id/498309616/es/foto/gran-mar-carretera-la-v%C3%ADa-l%C3%A1ctea-en-la-noche-vista.jpg?s=612x612&w=0&k=20&c=XUsavsgJptpEqwLSe2VUzhBwTi3vmGzBg9V25TrBH1Q=',
        alt: 'Imagen 10',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/48874.png',
        thumbnailImageSrc: 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/48874.png',
        alt: 'Imagen 11',
        title: 'Paisaje'
      },
      {
        itemImageSrc: 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/48873.png',
        thumbnailImageSrc: 'https://dbdzm869oupei.cloudfront.net/img/quadres/preview/48873.png',
        alt: 'Imagen 12',
        title: 'Paisaje'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
