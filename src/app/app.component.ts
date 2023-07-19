import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  flip(imageId: string, direction: string): void {
    const image = document.getElementById(imageId);
    if (image) {
      image.classList.remove('image-rotate-left', 'image-rotate-right', 'image-rotate-down', 'image-rotate-up');
      switch (direction) {
        case 'left':
          image.classList.add('image-rotate-left');
          break;
        case 'right':
          image.classList.add('image-rotate-right');
          break;
        case 'down':
          image.classList.add('image-rotate-down');
          break;
        case 'up':
          image.classList.add('image-rotate-up');
          break;
      }
    }
  }

  changeImg(newImg: string){
    let allImages = (document.querySelectorAll('.image'))

    allImages.forEach( image => {
      if(newImg)
      image.setAttribute('src', newImg)
    })
  }
}
