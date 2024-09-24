
export default function Button({text, color, borderColor, textColor, icon, onClick}) {
    return (
        // передаем сюда цвет кнопки -- можешь изменить если нужно
        
        <div className={`btn btn-bg-${color} ${borderColor ? `btn-border-${borderColor}` : ''}  `}   onClick={onClick}>
            {
                icon && icon /*если иконку есть, то мы её пердаем и отображаем, иначе - нет*/ 
            }
            <div className={`btn-text ${textColor ? `btn-text-${textColor}` : ''}  ${icon ? 'btn-text-margin' : ''}  `}>
                {text}
            </div>
        </div>
    );
}