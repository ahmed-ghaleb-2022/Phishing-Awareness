import scipy.stats as stats

# Data
method_A = [100, 75, 62.5, 75, 100, 87.5, 87.5, 87.5, 75, 75, 100, 100, 87.5, 87.5]
method_B = [80, 50, 50, 60, 40, 60, 70, 90, 80, 60, 40, 80, 50, 60]

# Perform independent t-test
t_stat, p_value = stats.ttest_ind(metode_A, metode_B)

print("T-Value:", t_stat)
print("P-Value:", p_value)
