import './index.css'

const ThumbnailItem = props => {
  const {ActiveImg, eachImageDetails, onSelectImage} = props
  const {thumbnailUrl, thumbnailAltText} = eachImageDetails

  const onClickedThumbnail = () => {
    onSelectImage(eachImageDetails)
  }
  const isSelect =
    ActiveImg.id === eachImageDetails.id ? 'select-thumbnail' : ''

  return (
    <li className={`thumbnail ${isSelect}`}>
      <button className="button" type="button" onClick={onClickedThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
