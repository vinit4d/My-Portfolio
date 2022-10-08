
import Image from 'next/image'
function TheImage({img,h,w}) {
  return (
    <>
    <Image
    src={img}
    alt="Picture of the author"
    height={h}
    width={w}
  />
  </>
  )
}

export default TheImage