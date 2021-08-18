export default function imageInput() {
  return (
    <input
      type="file"
      alt="select an image"
      id="imageInput"
      name="imageInput"
      accept="image/png, image/jpeg"
    />
  );
}
