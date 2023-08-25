export const CARD_WIDTH = 200;
export const CARD_MARGIN = 5;
export const CONTAINER_WIDTH = 750;

export const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
};