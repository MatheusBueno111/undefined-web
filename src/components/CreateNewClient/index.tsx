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

const createNewClientFormSchema = z.object({
  username: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'Mínimo 3 caracteres'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de email inválido'),
})

type CreateNewClientFormData = z.infer<typeof createNewClientFormSchema>

const CreateNewClient: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateNewClientFormData>({
    resolver: zodResolver(createNewClientFormSchema),
  })

  const email = watch('email')
  const username = watch('username')
  const isSubmitDisabled = !email || !username

  const createNewClient = async ({
    email,
    username,
  }: CreateNewClientFormData) => {
    try {
      const usersCollectionRef = collection(db, 'users')
      const emailExistsQuery = query(
        usersCollectionRef,
        where('email', '==', email),
      )
      const existingEmails = await getDocs(emailExistsQuery)

      if (existingEmails) {
        toast.error('Usuário já cadastrado')
        return
      }

      const currentDate = new Date()
      const formattedDate = currentDate.toISOString()
      const newUser = {
        email,
        username,
        createdAt: formattedDate,
      }

      await addDoc(usersCollectionRef, newUser)
      reset()
      toast.success('Usuário criado')
    } catch (error) {
      console.error('Ocorreu um erro ao criar o usuário:', error)
      toast.error('Ocorreu um erro ao criar o usuário')
    }
  }

  return (
    <S.Container>
      <S.FormNewClient onSubmit={handleSubmit(createNewClient)}>
        <S.Wrapper>
          <label htmlFor="title">Email</label>
          <S.Input type="email" placeholder="E-mail" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </S.Wrapper>
        <S.Wrapper>
          <label htmlFor="title">Username</label>
          <S.Input
            type="text"
            placeholder="Username"
            {...register('username')}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </S.Wrapper>
        <Button.Root
          width="12rem"
          padding="0.8rem"
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Button.Icon icon={PlusCircle} weight="bold" />
          <Button.Text text="Registrar" />
        </Button.Root>
      </S.FormNewClient>
    </S.Container>
  )
}

export default CreateNewClient
