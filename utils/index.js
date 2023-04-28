export const checkImageURL = url => {
  if (url) {
    const pattern = new RegExp(
      '^(https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp))$',
      'i'
    )
    return pattern.test(url)
  } else return false
}
