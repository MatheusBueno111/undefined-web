import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'phosphor-react'

const createNewProductFormSchema = z.object({
  product: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'Mínimo 3 caracteres'),
})

type CreateNewClientFormData = z.infer<typeof createNewProductFormSchema>

const CreateNewProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateNewClientFormData>({
    resolver: zodResolver(createNewProductFormSchema),
  })

  const product = watch('product')
  const isSubmitDisabled = !product

  const createNewClient = (data: CreateNewClientFormData) => {
    console.log('data', data)
  }

  return (
    <S.Container>
      <S.FormNewProduct onSubmit={handleSubmit(createNewClient)}>
        <S.Wrapper>
          <label htmlFor="title">Produto</label>
          <S.Input
            type="text"
            placeholder="Nome do produto"
            {...register('product')}
          />
          {errors.product && <span>{errors.product.message}</span>}
        </S.Wrapper>
        <S.Button type="submit" disabled={isSubmitDisabled}>
          <PlusCircle weight="bold" />
          Create
        </S.Button>
      </S.FormNewProduct>
    </S.Container>
  )
}

export default CreateNewProduct
