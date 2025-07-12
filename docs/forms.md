# Forms and Validation

- Use react-hook-form + yup/zod for validation
- Components: Form, FormField, Input, Checkbox, Select, PasswordInput, FileUpload
- Example of integration with UI Kit

## Example
```tsx
import { useForm } from 'react-hook-form';
import { Input, Button } from 'neo-brutal-ui';

const { register, handleSubmit, formState } = useForm();

<form onSubmit={handleSubmit(data => console.log(data))}>
  <Input {...register('email')} />
  <Button type="submit">Submit</Button>
</form>
``` 