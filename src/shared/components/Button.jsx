
export default function Button({text, color, icon, onClick}) {
    return (
        // передаем сюда цвет кнопки -- можешь изменить если нужно
        
        <div className={`btn ${color}`} onClick={onClick}>
            {
                icon && icon /*если иконку есть, то мы её пердаем и отображаем, иначе - нет*/ 
            }
            {text}
        </div>
    );
}