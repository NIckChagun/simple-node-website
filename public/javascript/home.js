// function changeImage(element) {
//     // ตรวจสอบว่าคลิกครั้งแรกหรือไม่
//     if (!element.classList.contains('clicked')) {
//         // เปลี่ยนรูปภาพเมื่อถูกคลิกครั้งแรก
//         element.classList.add('clicked');
//         element.style.backgroundImage = "url('/images/Park_Jonggun_profile1.jpg')";
//     } else {
//         // เปลี่ยนกลับเป็นรูปเดิมเมื่อคลิกครั้งที่สอง
//         element.classList.remove('clicked');
//         element.style.backgroundImage = "url('/images/Park_Jongun.png')";
//     }
// }
// // OnClick Image1

// function changeImage2(element) {
//     // ตรวจสอบว่าคลิกครั้งแรกหรือไม่
//     if (!element.classList.contains('clicked')) {
//         // เปลี่ยนรูปภาพเมื่อถูกคลิกครั้งแรก
//         element.classList.add('clicked');
//         element.style.backgroundImage = "url('/images/Kim_Jungoo_profile1.jpg')";
//     } else {
//         // เปลี่ยนกลับเป็นรูปเดิมเมื่อคลิกครั้งที่สอง
//         element.classList.remove('clicked');
//         element.style.backgroundImage = "url('/images/Kim_Jungoo.png')";
//     }
// }
// // OnClick Image2

// function changeImage3(element) {
//     // ตรวจสอบว่าคลิกครั้งแรกหรือไม่
//     if (!element.classList.contains('clicked')) {
//         // เปลี่ยนรูปภาพเมื่อถูกคลิกครั้งแรก
//         element.classList.add('clicked');
//         element.style.backgroundImage = "url('/images/Lee_Jihoon_profile1.jpg')";
//     } else {
//         // เปลี่ยนกลับเป็นรูปเดิมเมื่อคลิกครั้งที่สอง
//         element.classList.remove('clicked');
//         element.style.backgroundImage = "url('/images/Lee_Jihoon.png')";
//     }
// }
// // OnClick Image3

// function changeImage4(element) {
//     // ตรวจสอบว่าคลิกครั้งแรกหรือไม่
//     if (!element.classList.contains('clicked')) {
//         // เปลี่ยนรูปภาพเมื่อถูกคลิกครั้งแรก
//         element.classList.add('clicked');
//         element.style.backgroundImage = "url('/images/Park_Huyungseok_profile1.jpg')";
//     } else {
//         // เปลี่ยนกลับเป็นรูปเดิมเมื่อคลิกครั้งที่สอง
//         element.classList.remove('clicked');
//         element.style.backgroundImage = "url('/images/Park_Huyungseok.png')";
//     }
// }
// // OnClick Image4

// JavaScript
function changeImage(element, profileName) {
    // ตรวจสอบว่าคลิกครั้งแรกหรือไม่
    if (!element.classList.contains('clicked')) {
        // เปลี่ยนรูปภาพเมื่อถูกคลิกครั้งแรก
        element.classList.add('clicked');
        element.style.backgroundImage = `url('/images/${profileName}_profile1.jpg')`;
    } else {
        // เปลี่ยนกลับเป็นรูปเดิมเมื่อคลิกครั้งที่สอง
        element.classList.remove('clicked');
        element.style.backgroundImage = `url('/images/${profileName}.png')`;
    }
}
