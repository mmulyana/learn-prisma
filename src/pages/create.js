import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useRouter } from 'next/router'

const initialValues = {
  title: '',
  content: '',
  image: '',
}

export default function Create() {
  const router = useRouter()

  async function handleSubmit(values, { setSubmitting }) {
    await axios.post('/api/create', values)
    router.push('/')
    setSubmitting(false)
  }

  return (
    <div className='max-w-[400px] mx-auto'>
      <h1 className='mt-4 text-center'>Create News</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-2 mt-6'>
            <Field
              className='textfield'
              type='text'
              name='title'
              placeholder='title'
            />
            <Field
              className='textfield'
              as='textarea'
              name='content'
              rows='5'
              cols='50'
              placeholder='content'
            />
            <Field
              className='textfield'
              type='text'
              name='image'
              placeholder='url image'
            />
            <button
              type='submit'
              className='btn-submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className='transition-all duration-300 z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50'>
                  <svg
                    className='animate-spin w-6 h-6'
                    viewBox='0 0 28 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      opacity='0.2'
                      cx='14'
                      cy='14'
                      r='13'
                      className='stroke-white'
                      strokeWidth='2'
                    />
                    <path
                      d='M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24'
                      className='stroke-white'
                      strokeWidth='2'
                    />
                  </svg>
                </span>
              ) : (
                'Post Data'
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
