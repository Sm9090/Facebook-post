import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './Component/Image Gallery';
import ReactionButton from './Component/Buttons';
import hahaReact from './Images/haha.gif';
import heart from './Images/heart.gif';
import care from './Images/care.gif';
import wow from './Images/wow.gif';
import thumb from './Images/thumb.gif'
import sad from './Images/sad.gif'
import angry from './Images/angry.gif'
import Comment from "./Component/CommentBox"




function App() {
  const [data, setData] = useState([]);
  const [selectedText, setSelectedText] = useState('like')
  const [reactions, setReactions] = useState({}); // Use an object to store post-specific reactions
  const [toggleLikeBtn, setToggleLikeBtn] = useState(false)
  const [showReactions, setShowReactions] = useState(false);
  const [HoverItem, setHoverItem] = useState(null)
  const [reactionImages , setReactionImages] = useState([thumb,heart,hahaReact,care,wow,sad,angry])

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => {
      setData(res.products);
    });
  };
  const reactionTextMapping = {
    [thumb]: 'Liked',
    [hahaReact]: 'Haha',
    [heart]: 'Heart',
    [care]: 'Care',
    [wow]: 'Wow',
    [sad]: 'Sad',
    [angry]: 'angry'
  };
  
  const handleReactionClick = (reaction, index) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [index]: reaction,
    }));
    setSelectedText(reactionTextMapping[reaction]);
  };

  const toggleLike = (index) => {
    setToggleLikeBtn((prevToggleState) => {
      const newToggleState = { ...prevToggleState };
      newToggleState[index] = !newToggleState[index];
      return newToggleState;
    })
  }

  const handleButtonHover = (index) => {
    setHoverItem(index)
    setShowReactions(true);
  };

  const handleButtonLeave = () => {
    setShowReactions(false);
  };

  const handleHideHover = () => {
    setShowReactions(true)
  }

  const handleHideLeave = () => {
    setShowReactions(false);
  }




  if (!data || !data.length) {
    return (
      <>
        <h2>loading..</h2>
      </>
    );
  }

  return (
    <main className="container">
      {data.map((items, index) => {
        return (
          <div className="Posting" key={index}>
            <div className="user">
              <img src={items.thumbnail} alt="" />
              <div className="userName">
                <h4>{items.title}</h4>
                <small>{items.category}</small>
              </div>
            </div>
            <div className="description">
              <p>{items.description}</p>
            </div>
            <div className='Images'>
              <ImageGallery Images={items.images} />
            </div>
            <ReactionButton
              selectedText={selectedText}
              toggleLikeBtn={toggleLikeBtn}
              showReactions={showReactions}
              HoverItem={HoverItem}
              index={index}
              reactions={reactions}
              handleButtonHover={handleButtonHover}
              handleButtonLeave={handleButtonLeave}
              handleHideHover={handleHideHover}
              handleHideLeave={handleHideLeave}
              handleReactionClick={handleReactionClick}
              toggleLike={toggleLike}
              reactionImages={reactionImages}
            />
          <hr />
          <Comment thumbnail={items.thumbnail} />
          </div>
        );
      })}
    </main>
  );
}

export default App;
