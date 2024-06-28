import React from 'react';
import ButtonPoly from '../../ButtonPoly/ButtonPoly';

interface AccordionItemProps {
  item: {
    id: number;
    image: string;
    text: string;
    fullText: string;
    isOpen: boolean,
  };
  issOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, issOpen, onToggle }) => {
    // const [isOpen, setIsOpen] = useState(item.isOpen);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <li style={styles.item}>
      <div style={styles.header}>
        {!issOpen && <img src={item.image} alt="Small thumbnail" style={styles.image} />}
        <div style={styles.text}>{item.text}</div>
        <ButtonPoly 
        className="btnPoly"
        onClick={onToggle} iconWidth={70}
            iconHeight={70}
            iconArrow="arrow50"
            iconArrowId="arrow"
            iconPolygonId="polygon-green-stroke"
            >
          {/* {issOpen ? 'Close' : 'Open'} */}
        </ButtonPoly>
      </div>
      {issOpen && <div style={styles.fullText}>{item.fullText}</div>}
    </li>
  );
};

const styles = {
  item: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    background: '#f9f9f9',
  },
  image: {
    width: '284px',
    height: '284px',
    marginRight: '10px',
  },
  text: {
    flexGrow: 1,
  },
  button: {
    marginLeft: '10px',
  },
  fullText: {
    padding: '10px',
    background: '#fff',
    color:'black'
  },
};

export default AccordionItem;