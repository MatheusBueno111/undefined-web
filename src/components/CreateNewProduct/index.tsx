import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'phosphor-react'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Button } from '../Button'
import { toast } from 'react-toastify'

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
    reset,
  } = useForm<CreateNewClientFormData>({
    resolver: zodResolver(createNewProductFormSchema),
  })

  const product = watch('product')
  const isSubmitDisabled = !product

  const createNewClient = async ({ product }: CreateNewClientFormData) => {
    const productsCollectionRef = collection(db, 'products')

    try {
      const productExistsQuery = query(
        productsCollectionRef,
        where('name', '==', product),
      )
      const existingProducts = await getDocs(productExistsQuery)

      if (existingProducts) {
        toast.error('Produto já cadastrado')
        return
      }

      const currentDate = new Date()
      const formattedDate = currentDate.toISOString()
      const newProduct = {
        name: product,
        createdAt: formattedDate,
      }

      await addDoc(productsCollectionRef, newProduct)
      reset()
      toast.success('Produto criado')
    } catch (error) {
      console.error('Ocorreu um erro ao criar o produto:', error)
      toast.error('Erro ao criar o produto')
    }
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
        <Button.Root
          width="10rem"
          padding="0.8rem"
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Button.Icon icon={PlusCircle} weight="bold" />
          <Button.Text text="Criar" />
        </Button.Root>
      </S.FormNewProduct>
    </S.Container>
  )
}

export default CreateNewProduct
