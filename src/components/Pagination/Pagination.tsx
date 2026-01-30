import styles from "./styles.module.css"

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  marginTop_size?: string
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  setCurrentPage,
  marginTop_size = "0px",
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (totalPages <= 1) return null

  return (
    <div className={styles.pagination} style={{ marginTop: marginTop_size }}>
      <button onClick={previousPage}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <span className={styles.currentPage}>{currentPage}</span>

      <button onClick={nextPage}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default Pagination
