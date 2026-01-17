import { Label } from '../ui/label';
import { Input } from '../ui/input';

function ImageInput({label}:{label?:string}) {
  const name = 'image';
  return (
    <div className='mb-2 space-y-2'>
      <Label htmlFor={name} className='capitalize'>
        {!label?'Image':label}
      </Label>
      <Input id={name} name={name} type='file' required accept='image/*' />
    </div>
  );
}
export default ImageInput;