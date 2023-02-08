
export const GifItem = ({title, url}) => {
  return (
    <>
    <div className="card">
        <img src={url}></img>
        <p>{title}</p>
    </div>
    </>
  )
}

