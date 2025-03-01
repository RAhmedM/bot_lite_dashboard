import React, { useState } from "react"

const Select = ({ defaultValue, children, ...props }) => {
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  
  return (
    <div {...props}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { 
            value, 
            onClick: () => setOpen(!open) 
          })
        }
        if (child.type === SelectContent && open) {
          return React.cloneElement(child, { 
            value, 
            onValueChange: (val) => {
              setValue(val)
              setOpen(false)
            }
          })
        }
        return null
      })}
    </div>
  )
}

const SelectTrigger = ({ className, children, value, ...props }) => {
  return (
    <button
      className={`flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  )
}

const SelectValue = ({ placeholder, children, ...props }) => {
  return <span {...props}>{children || placeholder}</span>
}

const SelectContent = ({ className, children, value, onValueChange, ...props }) => {
  return (
    <div
      className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 ${className || ""}`}
      {...props}
    >
      <div className="p-1">
        {React.Children.map(children, child => {
          if (child.type === SelectItem) {
            return React.cloneElement(child, { 
              selected: child.props.value === value,
              onSelect: () => onValueChange(child.props.value)
            })
          }
          return child
        })}
      </div>
    </div>
  )
}

const SelectItem = ({ className, children, value, selected, onSelect, ...props }) => {
  return (
    <div
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
        selected ? "bg-accent" : ""
      } ${className || ""}`}
      onClick={onSelect}
      {...props}
    >
      {selected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </span>
      )}
      <span className="truncate">{children}</span>
    </div>
  )
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }