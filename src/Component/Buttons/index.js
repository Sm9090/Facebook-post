import React from "react"
import './style.css'



function ReactionButton({
    index,
    toggleLike,
    handleButtonHover,
    handleButtonLeave,
    handleHideHover,
    handleHideLeave,
    handleReactionClick,
    reactions,
    selectedText,
    toggleLikeBtn,
    showReactions,
    HoverItem,
    reactionImages,
}) {
    return (
        <div className="Parent">
            <div className="detailed-comments"></div>
            <hr />
            <div className="buttons" >
                <button onClick={() => toggleLike(index)} onMouseEnter={() => handleButtonHover(index)} onMouseLeave={handleButtonLeave}>
                    {reactions[index] ?
                        (<div><img src={reactions[index]} alt="Reaction" />  {selectedText} </div>) : (!toggleLikeBtn[index] ?
                            (<span>
                                <i className="fa fa-thumbs-o-up margin-right" ></i>
                                like
                            </span>) :
                            (<span style={{ color: 'blue' }}>
                                <i className="fa fa-thumbs-up margin-right"></i>
                                liked
                            </span>)
                        )
                    }
                </button>
                <button><i className='fa fa-comment-o margin-right'></i> Comment</button>
                <button><i className='fa fa-share margin-right'></i>Share</button>
                <div className={`Hide ${showReactions && HoverItem === index ? 'active' : ''}`} onMouseEnter={handleHideHover} onMouseLeave={handleHideLeave}>
                    {reactionImages && reactionImages.map((imageSrc, i) => (
                        <img
                            key={i}
                            src={imageSrc}
                            alt=""
                            onClick={() => handleReactionClick(imageSrc, index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ReactionButton