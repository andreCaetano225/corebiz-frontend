import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './news.scss';
import api from '../../services/api';

const newsletterSchema = z.object({
  name: z
    .string()
    .min(1, 'Preencha com seu nome completo')
    .max(50, 'Preencha com um e-mail válido'),
  email: z
    .string()
    .email('Digite um email válido.')
    .min(1, 'O email é obrigatório'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await api.post('/newsletter', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error('Erro ao enviar o formulário. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  const handleNewEmail = () => {
    reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section className="news">
        <div className="news__form-sucess">
          <h2>Seu e-mail foi cadastrado com sucesso!</h2>
          <span>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </span>
          <button onClick={handleNewEmail}>Cadastrar novo e-mail</button>
        </div>
      </section>
    );
  }

  return (
    <section className="news">
      <div>
        <h2>Participe de nossas news com promoções e novidades!</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="news__div-form">
            <div>
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register('name')}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Digite seu email"
                className={errors.email ? 'error' : ''}
                {...register('email')}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <button type="submit">Eu quero!</button>
          </div>
        </form>
      </div>
    </section>
  );
};
