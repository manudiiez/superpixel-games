import { useEffect, useState } from 'react';
import styles from './cartSummary.module.scss'
import { forEach } from 'lodash';
import calcDiscountedPrice from '@/utils/func';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'


const CartSummary = ({ games, deleteAllItems }) => {

    const { data: session } = useSession()
    const [totals, setTotals] = useState(null);
    const router = useRouter()

    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0,
        }

        forEach(games, (game) => {
            const price = calcDiscountedPrice(game.attributes.price, game.attributes.discount)
            totals = {
                original: totals.original + game.attributes.price * game.quantity,
                discount: totals.discount + (game.attributes.price - price) * game.quantity,
                price: totals.price + price * game.quantity,
            }
        })
        setTotals(totals)
    }, [games])

    // const addCupon = async () => {

    //     const res = await Swal.fire({
    //         title: 'Codigo de cupon',
    //         icon: 'question',
    //         input: 'text',
    //         showLoaderOnConfirm: true,
    //         inputAttributes: {
    //             autocapitalize: 'off'
    //         },
    //         showCancelButton: true,
    //         preConfirm: async (code) => {
    //             try {
    //                 const response = await fetch(`${ENV.CLIENT_API}/discount/${code}`, {
    //                     method: "GET",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         "Authorization": `Bearer ${session.user.jwt}`,
    //                     }
    //                 })
    //                 if (response.status !== 200) {
    //                     throw new Error(response.statusText)
    //                 }
    //                 return await response.json()
    //             } catch (error) {
    //                 console.log(error);
    //                 Swal.showValidationMessage(`Error: no quedan descuentos`)

    //             }
    //         },
    //         allowOutsideClick: () => !Swal.isLoading()
    //     })
    //     const cupon = res.value
    //     const price = calcDiscountedPrice(totals.price, cupon.attributes.discount)
    //     setTotals({ ...totals, discount: totals.discount + (totals.price - price), price: price })
    //     Swal.fire({
    //         icon: 'success',
    //         text: 'Descuento aplicado'
    //     })


    // }

    const nextStep = async () => {
        try {
            await Swal.fire({
                icon: 'success',
                text: 'Compra realizada'
            })
            deleteAllItems()
            router.push('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.summary}>
            {/* <div>
                <button onClick={addCupon}>Aplicar Descuento</button>
            </div> */}
            <div className={styles.summaryInfo}>

                <div>
                    <p>Precio oficial</p>
                    <p>{totals?.original.toFixed(2)}$</p>
                </div>

                <div>
                    <p>Descuento</p>
                    <p>{totals?.discount.toFixed(2)}$</p>
                </div>

                <div>
                    <p>Subtotal</p>
                    <p>{totals?.price.toFixed(2)}$</p>
                </div>
            </div>
            <div>
                <button onClick={nextStep}>Proceder con el pago</button>
                <Link href='/search?s='>Continuar comprando</Link>
            </div>
        </div>
    )
}

export default CartSummary