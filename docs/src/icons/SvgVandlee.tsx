import * as React from 'react';
import RootSvg, { RootSvgProps } from 'docs/src/icons/RootSvg';

export default function SvgVandleeLogomark(props: RootSvgProps) {
  return (
    <RootSvg
      xmlns="http://www.w3.org/2000/svg"
      height={32}
      viewBox="0 0 175 175"
      fill="none"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 87.5C0 39.1751 39.1751 0 87.5 0C135.825 0 175 39.1751 175 87.5C175 135.825 135.825 175 87.5 175C39.1751 175 0 135.825 0 87.5ZM152.644 100.05C154.778 101.898 157.529 101.562 159.27 99.3213C159.663 98.8171 160 97.8086 160 97.0803C160 95.0074 138.774 47.1068 137.202 45.5942C135.685 44.3056 133.664 44.0255 131.923 44.9219C131.362 45.202 126.027 54.2219 120.075 64.9225C114.178 75.6791 109.012 84.699 108.675 85.0912C108.226 85.5954 105.643 80.3291 98.5677 64.1942C89.6392 43.9695 88.9092 42.5128 87.1685 41.6725C86.4037 41.3071 85.8208 40.9624 85.2199 40.9276C82.6883 40.7813 79.8385 46.1388 61.7308 78.6484C50.4438 98.8731 41.0661 115.288 40.8977 115.064C40.7292 114.84 36.4054 105.26 31.4077 93.7749C25.7923 81.0574 21.7492 72.5418 21.0754 72.0375C18.38 70.1888 14 72.2616 14 75.399C14 77.5839 36.2931 127.894 37.9215 129.406C39.7746 131.031 42.6385 131.031 44.1546 129.35C44.7723 128.678 50.1631 119.322 56.1154 108.621L66.9531 89.0689L67.9639 91.4219C68.5254 92.6544 72.8492 102.403 77.51 113.047C84.7538 129.462 86.27 132.488 87.6177 133.216C89.6392 134.224 90.9308 134.224 92.4469 133.16C93.1208 132.712 102.667 116.072 113.729 96.1839C124.792 76.2954 133.945 60.0484 134.169 60.0484C134.338 60.0484 138.381 68.8442 143.098 79.6568C147.871 90.4135 152.138 99.6014 152.644 100.05ZM94.3 76.6875C89.6392 66.155 85.6523 57.3592 85.4277 57.1351C85.1469 56.855 82.1708 61.7291 78.7454 67.8918L72.5123 79.0966L81.2723 99.0412C89.3023 117.305 90.0885 118.818 90.7062 117.641C90.9083 117.267 91.7636 115.737 92.9668 113.585C94.1036 111.552 95.5511 108.963 97.0515 106.268C97.7937 104.936 98.5066 103.658 99.1616 102.484C101.232 98.7729 102.723 96.101 102.723 96.0159C102.723 95.9328 100.627 91.1447 97.6683 84.3856C96.6335 82.0217 95.4931 79.4167 94.3 76.6875Z" fill="currentColor"/>
    </RootSvg>
  );
}


export const vandleeSvgLogoString = `<svg height="32" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1347_1397)"><path fillRule="evenodd" clipRule="evenodd" d="M87.5 175C135.825 175 175 135.825 175 87.5C175 39.1751 135.825 0 87.5 0C39.1751 0 0 39.1751 0 87.5C0 135.825 39.1751 175 87.5 175ZM74.9504 22.3561C73.1016 20.2223 73.4377 17.4708 75.6787 15.73C76.1829 15.3369 77.1914 15 77.9197 15C79.9926 15 127.893 36.2261 129.406 37.7985C130.694 39.3146 130.974 41.3361 130.078 43.0769C129.798 43.6385 120.778 48.9731 110.078 54.9254C99.3209 60.8215 90.301 65.9877 89.9088 66.3246C89.4046 66.7738 94.6709 69.3569 110.806 76.4323C131.031 85.3608 132.487 86.0908 133.328 87.8315C133.693 88.5963 134.038 89.1792 134.072 89.7801C134.219 92.3117 128.861 95.1615 96.3516 113.269C76.1269 124.556 59.7118 133.934 59.9359 134.102C60.16 134.271 69.7402 138.595 81.2251 143.592C93.9426 149.208 102.458 153.251 102.962 153.925C104.811 156.62 102.738 161 99.601 161C97.4161 161 47.1064 138.707 45.5938 137.078C43.9691 135.225 43.9691 132.362 45.6498 130.845C46.3221 130.228 55.6781 124.837 66.3787 118.885L85.9311 108.047L83.5781 107.036C82.3456 106.475 72.5974 102.151 61.9528 97.49C45.5377 90.2462 42.5124 88.73 41.7841 87.3823C40.7757 85.3608 40.7757 84.0692 41.8402 82.5531C42.2883 81.8792 58.9275 72.3331 78.8161 61.2708C98.7046 50.2085 114.952 41.0554 114.952 40.8308C114.952 40.6623 106.156 36.6192 95.3432 31.9023C84.5865 27.1292 75.3986 22.8615 74.9504 22.3561ZM98.3125 80.7C108.845 85.3608 117.641 89.3477 117.865 89.5723C118.145 89.8531 113.271 92.8292 107.108 96.2546L95.9034 102.488L75.9588 93.7277C57.695 85.6977 56.1823 84.9115 57.3588 84.2938C57.7333 84.0917 59.2631 83.2364 61.415 82.0332C63.4483 80.8964 66.0371 79.4489 68.7317 77.9485C70.0645 77.2063 71.3422 76.4934 72.516 75.8384C76.2271 73.7678 78.899 72.2769 78.9841 72.2769C79.0672 72.2769 83.8553 74.3729 90.6144 77.3317C92.9783 78.3665 95.5833 79.5069 98.3125 80.7Z" fill="black"/></g><defs><clipPath id="clip0_1347_1397"><rect width="175" height="175" fill="white"/></clipPath></defs></svg>`

export const vandleeSvgWordmarkString = `<svg height="32" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1347_1397)"><path fillRule="evenodd" clipRule="evenodd" d="M87.5 175C135.825 175 175 135.825 175 87.5C175 39.1751 135.825 0 87.5 0C39.1751 0 0 39.1751 0 87.5C0 135.825 39.1751 175 87.5 175ZM74.9504 22.3561C73.1016 20.2223 73.4377 17.4708 75.6787 15.73C76.1829 15.3369 77.1914 15 77.9197 15C79.9926 15 127.893 36.2261 129.406 37.7985C130.694 39.3146 130.974 41.3361 130.078 43.0769C129.798 43.6385 120.778 48.9731 110.078 54.9254C99.3209 60.8215 90.301 65.9877 89.9088 66.3246C89.4046 66.7738 94.6709 69.3569 110.806 76.4323C131.031 85.3608 132.487 86.0908 133.328 87.8315C133.693 88.5963 134.038 89.1792 134.072 89.7801C134.219 92.3117 128.861 95.1615 96.3516 113.269C76.1269 124.556 59.7118 133.934 59.9359 134.102C60.16 134.271 69.7402 138.595 81.2251 143.592C93.9426 149.208 102.458 153.251 102.962 153.925C104.811 156.62 102.738 161 99.601 161C97.4161 161 47.1064 138.707 45.5938 137.078C43.9691 135.225 43.9691 132.362 45.6498 130.845C46.3221 130.228 55.6781 124.837 66.3787 118.885L85.9311 108.047L83.5781 107.036C82.3456 106.475 72.5974 102.151 61.9528 97.49C45.5377 90.2462 42.5124 88.73 41.7841 87.3823C40.7757 85.3608 40.7757 84.0692 41.8402 82.5531C42.2883 81.8792 58.9275 72.3331 78.8161 61.2708C98.7046 50.2085 114.952 41.0554 114.952 40.8308C114.952 40.6623 106.156 36.6192 95.3432 31.9023C84.5865 27.1292 75.3986 22.8615 74.9504 22.3561ZM98.3125 80.7C108.845 85.3608 117.641 89.3477 117.865 89.5723C118.145 89.8531 113.271 92.8292 107.108 96.2546L95.9034 102.488L75.9588 93.7277C57.695 85.6977 56.1823 84.9115 57.3588 84.2938C57.7333 84.0917 59.2631 83.2364 61.415 82.0332C63.4483 80.8964 66.0371 79.4489 68.7317 77.9485C70.0645 77.2063 71.3422 76.4934 72.516 75.8384C76.2271 73.7678 78.899 72.2769 78.9841 72.2769C79.0672 72.2769 83.8553 74.3729 90.6144 77.3317C92.9783 78.3665 95.5833 79.5069 98.3125 80.7Z" fill="black"/></g><defs><clipPath id="clip0_1347_1397"><rect width="175" height="175" fill="white"/></clipPath></defs></svg>`

