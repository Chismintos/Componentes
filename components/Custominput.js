export default function CustomInput({ titleLable, placeholderLabel }) {
    const div = document.createElement('div');
    div.classList = 'grupo';
  
    div.innerHTML = `
    
          <label>${titleLable}</label>
          <input placeholder='${placeholderLabel}' />        
      `;
  
    return div;
  }




