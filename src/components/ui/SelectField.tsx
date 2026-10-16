'use client';

import Dropdown from 'react-bootstrap/Dropdown';
import { Check, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: readonly SelectOption[];
  onChange: (value: string) => void;
  id?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function SelectField({
  label,
  value,
  options,
  onChange,
  id,
  disabled = false,
  size = 'md',
  className,
}: SelectFieldProps) {
  const selected = options.find((option) => option.value === value);

  return (
    <Dropdown
      className={clsx('kl-select', size === 'sm' && 'kl-select--sm', className)}
      onSelect={(eventKey) => {
        if (eventKey !== null && eventKey !== value) onChange(eventKey);
      }}
    >
      <Dropdown.Toggle
        id={id}
        type="button"
        variant="light"
        disabled={disabled || options.length === 0}
        className="kl-select-toggle d-flex align-items-center justify-content-between gap-2 text-start"
        aria-label={`${label}: ${selected?.label ?? 'Pilih opsi'}`}
        aria-haspopup="listbox"
      >
        <span className="kl-select-value text-truncate">{selected?.label ?? 'Pilih opsi'}</span>
        <ChevronDown className="kl-select-chevron flex-shrink-0" size={17} strokeWidth={1.75} aria-hidden="true" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="kl-select-menu" role="listbox" aria-label={label}>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            as="button"
            type="button"
            eventKey={option.value}
            disabled={option.disabled}
            active={option.value === value}
            role="option"
            className="kl-select-option d-flex align-items-center justify-content-between gap-3"
          >
            <span>{option.label}</span>
            {option.value === value && <Check size={16} strokeWidth={2} className="flex-shrink-0" aria-hidden="true" />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
