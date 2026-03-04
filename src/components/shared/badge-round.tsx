import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { LucideIcon } from 'lucide-react';

type BadgeRoundProps = {
  count?: number;
  icon?: LucideIcon;
  ariaLabel?: string;
};

const BadgeRound = ({ count, icon: Icon, ariaLabel }: BadgeRoundProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      variant='outline'
      className='rounded-full bg-slate-100 w-10 h-10 flex flex-col items-center justify-end relative'
    >
      {Icon && <Icon className='w-4 h-4 text-slate-700' />}
      {count !== undefined && (
        <Badge className='absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
          {count}
        </Badge>
      )}
    </Button>
  );
};

export default BadgeRound;
