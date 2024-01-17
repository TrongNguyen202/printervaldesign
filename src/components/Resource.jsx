import React from 'react';
import '../styles/ResourceStyle.css'
const Resource = ({onClickAddText}) => {
  const menu = [
    {
      image: 'https://printerval.com/modules/pod/images/creat-your-own/t-shirt.png',
      name: 'Product',
    },
    {
      image: 'https://printerval.com/modules/pod/images/creat-your-own/design.png',
      name: 'Design',
    },
    {
      image: 'https://printerval.com/modules/pod/images/creat-your-own/text.png',
      name: 'Text',
      onClick: onClickAddText
    },
    {
      image: 'https://printerval.com/modules/pod/images/creat-your-own/upload.png',
      name: 'Upload',
    },
  ];

  return (
    <div>
      <div className='container cursor-pointer '>
        {menu.map((item, index) => (
          <div key={index} className='menu-item flex-col items-center ' onClick={item.onClick}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
