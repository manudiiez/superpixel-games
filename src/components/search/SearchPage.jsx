import { size } from 'lodash'
import NoResults from '../shared/noResults/NoResults'
import styles from './searchPage.module.scss'
import GridGames from '../shared/gridGames/GridGames'
import Separator from '../shared/separator/Separator'
import Pagination from '../shared/pagination/Pagination'
import Filters from './filters/Filters'

const SearchPage = ({ games, pagination, searchText }) => {

    const hasGames = size(games) > 0

    return (
        <section className={styles.searchPage}>
            <div>
                <p>Buscando por: <span>{searchText}</span></p>
                <div>
                    <div>
                        <Filters searchText={searchText} />
                    </div>
                    <div>
                        {
                            hasGames ? (
                                <>
                                    <GridGames games={games} />
                                    <Separator height={50} />
                                    <Pagination currentPage={pagination.page} totalPages={pagination.pageCount} />
                                </>
                            ) : (
                                <NoResults />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchPage