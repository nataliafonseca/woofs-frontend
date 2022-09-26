export function FileInput() {
  return (
    <ImageUploader img={img}>
      <div className="imageArea">
        <span className="closeButton" onClick={clearImg}>
          &#10006;
        </span>

        {img === null ? (
          <>
            <FaCloudUploadAlt />
            <p>Sem imagem</p>
          </>
        ) : (
          <></>
        )}

        <div className="fileName">
          <span>{imgName}</span>
        </div>

        <img src={img} alt="imageFile" />
      </div>

      <button onClick={handleChooseFile}>Upload</button>

      <input
        type="file"
        accept="image"
        ref={inputFileRef}
        onChange={(event) => checkFileType(event.target)}
        hidden
      />
    </ImageUploader>
  );
}
