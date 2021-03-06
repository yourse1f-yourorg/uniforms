import React          from 'react';
import classnames     from 'classnames';
import connectField   from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const noneIfNaN = x => isNaN(x) ? undefined : x;

const Num = ({
    className,
    decimal,
    disabled,
    error,
    errorMessage,
    icon,
    iconLeft,
    iconProps,
    id,
    inputRef,
    label,
    max,
    min,
    name,
    onChange,
    placeholder,
    required,
    showInlineError,
    step,
    value,
    ...props
}) =>
    <div className={classnames(className, {disabled, error, required}, 'field')} {...filterDOMProps(props)}>
        {label && (
            <label htmlFor={id}>
                {label}
            </label>
        )}

        <div className={classnames('ui', {left: iconLeft, icon: icon || iconLeft}, 'input')}>
            <input
                disabled={disabled}
                id={id}
                max={max}
                min={min}
                name={name}
                onChange={event => onChange(noneIfNaN((decimal ? parseFloat : parseInt)(event.target.value)))}
                placeholder={placeholder}
                ref={inputRef}
                step={step || (decimal ? 0.01 : 1)}
                type="number"
                value={value}
            />

            {(icon || iconLeft) && (
                <i className={`${icon || iconLeft} icon`} {...iconProps} />
            )}
        </div>

        {!!(errorMessage && showInlineError) && (
            <div className="ui red basic pointing label">
                {errorMessage}
            </div>
        )}
    </div>
;

export default connectField(Num);
